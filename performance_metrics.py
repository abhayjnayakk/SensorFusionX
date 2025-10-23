#!/usr/bin/env python3
"""
Performance Metrics and Validation for Sensor Fusion Framework
Addressing Reviewer Feedback with Concrete Measurements

This module provides:
1. SNR calculation and validation
2. Artifact detection and scoring
3. Latency and memory overhead measurements
4. Real-time performance validation
5. Quality-aware fusion metrics
"""

import numpy as np
import pandas as pd
import time
import psutil
import matplotlib.pyplot as plt
from scipy import signal
from scipy.stats import pearsonr
from sklearn.metrics import mean_squared_error, r2_score
import warnings
warnings.filterwarnings('ignore')

class PerformanceMetrics:
    """
    Comprehensive performance metrics for sensor fusion framework
    """
    
    def __init__(self, sampling_rate=240, window_size=512):
        self.sampling_rate = sampling_rate
        self.window_size = window_size
        self.metrics_history = []
        
    def compute_snr_db(self, signal, noise_estimate):
        """
        Compute Signal-to-Noise Ratio in dB
        Based on Context7 NumPy documentation for robust calculations
        """
        # Use NumPy's robust statistical functions
        signal_power = np.mean(signal ** 2)
        noise_power = np.maximum(1e-9, np.mean(noise_estimate ** 2))
        snr_db = 10 * np.log10(signal_power / noise_power)
        return snr_db
    
    def compute_artifact_score(self, signal, window_size=64):
        """
        Compute artifact score based on signal variability
        Using rolling statistics for real-time assessment
        """
        # Convert to pandas Series for rolling operations
        signal_series = pd.Series(signal)
        
        # Rolling standard deviation
        rolling_std = signal_series.rolling(window=window_size, center=True).std()
        
        # Artifact score based on variability
        artifact_score = np.clip(rolling_std / 0.2, 0, 1)
        
        return artifact_score.fillna(0).values
    
    def compute_drift_score(self, signal, window_size=128):
        """
        Compute baseline drift score
        """
        if len(signal) < 2 * window_size:
            return np.zeros_like(signal)
        
        # Baseline comparison
        window_start = signal[:window_size]
        window_end = signal[-window_size:]
        
        # Rolling drift calculation
        drift_scores = []
        for i in range(len(signal)):
            start_idx = max(0, i - window_size)
            end_idx = min(len(signal), i + window_size)
            
            if end_idx - start_idx < window_size:
                drift_scores.append(0)
                continue
                
            current_window = signal[start_idx:end_idx]
            drift = np.abs(np.mean(current_window) - np.mean(window_start))
            drift_score = np.clip(drift / 0.2, 0, 1)
            drift_scores.append(drift_score)
        
        return np.array(drift_scores)
    
    def compute_fusion_confidence(self, quality_metrics):
        """
        Compute fusion confidence based on multiple quality factors
        """
        snr_score = np.clip(quality_metrics['snr_db'] / 25, 0, 1)
        artifact_score = 1 - quality_metrics['artifact_score']
        drift_score = 1 - quality_metrics['drift_score']
        
        # Weighted combination
        confidence = (
            0.6 * snr_score +      # Signal clarity
            0.25 * artifact_score + # Artifact absence
            0.15 * drift_score      # Baseline stability
        )
        
        return confidence
    
    def measure_processing_latency(self, processing_function, *args, **kwargs):
        """
        Measure processing latency with high precision
        """
        # Warmup runs
        for _ in range(5):
            processing_function(*args, **kwargs)
        
        # Actual measurement
        start_time = time.perf_counter()
        result = processing_function(*args, **kwargs)
        end_time = time.perf_counter()
        
        latency = end_time - start_time
        return result, latency
    
    def measure_memory_usage(self):
        """
        Measure current memory usage
        """
        process = psutil.Process()
        memory_info = process.memory_info()
        return memory_info.rss / 1024 / 1024  # MB
    
    def validate_real_time_performance(self, processing_time, target_latency=5e-3):
        """
        Validate real-time performance requirements
        """
        return {
            'processing_time_ms': processing_time * 1000,
            'target_latency_ms': target_latency * 1000,
            'real_time_capable': processing_time < target_latency,
            'performance_margin': (target_latency - processing_time) / target_latency * 100
        }
    
    def comprehensive_quality_assessment(self, signals):
        """
        Perform comprehensive quality assessment on all signals
        """
        quality_results = {}
        
        for name, signal in signals.items():
            # Basic quality metrics
            snr_db = self.compute_snr_db(signal, signal - np.mean(signal))
            artifact_score = np.mean(self.compute_artifact_score(signal))
            drift_score = np.mean(self.compute_drift_score(signal))
            
            # Signal characteristics
            signal_power = np.mean(signal ** 2)
            signal_std = np.std(signal)
            signal_range = np.ptp(signal)  # peak-to-peak
            
            quality_results[name] = {
                'snr_db': snr_db,
                'artifact_score': artifact_score,
                'drift_score': drift_score,
                'signal_power': signal_power,
                'signal_std': signal_std,
                'signal_range': signal_range,
                'quality_grade': self._assign_quality_grade(snr_db, artifact_score, drift_score)
            }
        
        return quality_results
    
    def _assign_quality_grade(self, snr_db, artifact_score, drift_score):
        """
        Assign quality grade based on metrics
        """
        if snr_db > 15 and artifact_score < 0.3 and drift_score < 0.3:
            return 'Excellent'
        elif snr_db > 10 and artifact_score < 0.6 and drift_score < 0.6:
            return 'Good'
        elif snr_db > 5 and artifact_score < 0.8 and drift_score < 0.8:
            return 'Fair'
        else:
            return 'Poor'
    
    def benchmark_fusion_methods(self, signals, ground_truth):
        """
        Benchmark different fusion methods
        """
        methods = {
            'confidence_weighted': self._confidence_weighted_fusion,
            'simple_average': self._simple_average_fusion,
            'weighted_average': self._weighted_average_fusion
        }
        
        results = {}
        
        for method_name, method_func in methods.items():
            # Measure performance
            start_time = time.perf_counter()
            fused_signal = method_func(signals)
            processing_time = time.perf_counter() - start_time
            
            # Evaluate quality
            mse = mean_squared_error(ground_truth, fused_signal)
            r2 = r2_score(ground_truth, fused_signal)
            correlation, _ = pearsonr(ground_truth, fused_signal)
            snr = self.compute_snr_db(fused_signal, ground_truth - fused_signal)
            
            results[method_name] = {
                'processing_time': processing_time,
                'mse': mse,
                'r2_score': r2,
                'correlation': correlation,
                'snr_db': snr,
                'fused_signal': fused_signal
            }
        
        return results
    
    def _confidence_weighted_fusion(self, signals):
        """
        Confidence-weighted fusion implementation
        """
        quality_metrics = self.comprehensive_quality_assessment(signals)
        
        weights = {}
        for name, metrics in quality_metrics.items():
            confidence = self.compute_fusion_confidence(metrics)
            weights[name] = confidence
        
        # Normalize weights
        total_weight = sum(weights.values())
        weights = {k: v/total_weight for k, v in weights.items()}
        
        # Apply weighted fusion
        fused_signal = np.zeros_like(list(signals.values())[0])
        for name, signal in signals.items():
            fused_signal += weights[name] * signal
        
        return fused_signal
    
    def _simple_average_fusion(self, signals):
        """
        Simple average fusion baseline
        """
        return np.mean(list(signals.values()), axis=0)
    
    def _weighted_average_fusion(self, signals):
        """
        Fixed-weight average fusion
        """
        weights = {'ecg': 0.5, 'eeg': 0.3, 'emg': 0.2}
        fused_signal = np.zeros_like(list(signals.values())[0])
        
        for name, signal in signals.items():
            if name in weights:
                fused_signal += weights[name] * signal
        
        return fused_signal
    
    def generate_performance_report(self, benchmark_results):
        """
        Generate comprehensive performance report
        """
        print("="*80)
        print("SENSOR FUSION FRAMEWORK - PERFORMANCE VALIDATION REPORT")
        print("="*80)
        
        # Performance comparison table
        print("\n1. FUSION METHOD COMPARISON:")
        print("-" * 60)
        print(f"{'Method':<20} {'SNR (dB)':<10} {'R² Score':<10} {'Correlation':<12} {'Time (ms)':<10}")
        print("-" * 60)
        
        for method, results in benchmark_results.items():
            print(f"{method:<20} {results['snr_db']:<10.2f} {results['r2_score']:<10.3f} "
                  f"{results['correlation']:<12.3f} {results['processing_time']*1000:<10.2f}")
        
        # Real-time performance validation
        print("\n2. REAL-TIME PERFORMANCE VALIDATION:")
        print("-" * 60)
        
        target_latency = 5e-3  # 5ms
        for method, results in benchmark_results.items():
            rt_validation = self.validate_real_time_performance(results['processing_time'])
            print(f"{method}:")
            print(f"  Processing Time: {rt_validation['processing_time_ms']:.2f} ms")
            print(f"  Target Latency: {rt_validation['target_latency_ms']:.2f} ms")
            print(f"  Real-time Capable: {rt_validation['real_time_capable']}")
            print(f"  Performance Margin: {rt_validation['performance_margin']:.1f}%")
            print()
        
        # Memory usage
        memory_usage = self.measure_memory_usage()
        print(f"3. MEMORY USAGE: {memory_usage:.1f} MB")
        
        # Quality metrics summary
        print("\n4. QUALITY METRICS SUMMARY:")
        print("-" * 60)
        
        best_method = max(benchmark_results.keys(), 
                         key=lambda x: benchmark_results[x]['snr_db'])
        print(f"Best Performing Method: {best_method}")
        print(f"Highest SNR: {benchmark_results[best_method]['snr_db']:.2f} dB")
        print(f"Best R² Score: {benchmark_results[best_method]['r2_score']:.3f}")
        
        return benchmark_results
    
    def create_performance_visualizations(self, benchmark_results):
        """
        Create comprehensive performance visualizations
        """
        fig, axes = plt.subplots(2, 2, figsize=(15, 12))
        
        methods = list(benchmark_results.keys())
        snr_values = [benchmark_results[m]['snr_db'] for m in methods]
        r2_values = [benchmark_results[m]['r2_score'] for m in methods]
        correlation_values = [benchmark_results[m]['correlation'] for m in methods]
        time_values = [benchmark_results[m]['processing_time']*1000 for m in methods]
        
        # SNR comparison
        axes[0,0].bar(methods, snr_values, color=['#1f77b4', '#ff7f0e', '#2ca02c'])
        axes[0,0].set_title('SNR Comparison by Fusion Method')
        axes[0,0].set_ylabel('SNR (dB)')
        axes[0,0].tick_params(axis='x', rotation=45)
        
        # R² Score comparison
        axes[0,1].bar(methods, r2_values, color=['#1f77b4', '#ff7f0e', '#2ca02c'])
        axes[0,1].set_title('R² Score Comparison by Fusion Method')
        axes[0,1].set_ylabel('R² Score')
        axes[0,1].tick_params(axis='x', rotation=45)
        
        # Correlation comparison
        axes[1,0].bar(methods, correlation_values, color=['#1f77b4', '#ff7f0e', '#2ca02c'])
        axes[1,0].set_title('Correlation with Ground Truth')
        axes[1,0].set_ylabel('Correlation Coefficient')
        axes[1,0].tick_params(axis='x', rotation=45)
        
        # Processing time comparison
        axes[1,1].bar(methods, time_values, color=['#1f77b4', '#ff7f0e', '#2ca02c'])
        axes[1,1].set_title('Processing Time Comparison')
        axes[1,1].set_ylabel('Time (ms)')
        axes[1,1].tick_params(axis='x', rotation=45)
        
        # Add target latency line
        axes[1,1].axhline(y=5, color='red', linestyle='--', label='Target (5ms)')
        axes[1,1].legend()
        
        plt.tight_layout()
        plt.savefig('performance_metrics.png', dpi=300, bbox_inches='tight')
        plt.show()

def main():
    """
    Main performance validation function
    """
    print("Starting Performance Metrics Validation")
    print("="*50)
    
    # Initialize performance metrics
    metrics = PerformanceMetrics()
    
    # Generate test signals
    duration = 5  # seconds
    sampling_rate = 240
    t = np.linspace(0, duration, int(duration * sampling_rate))
    
    # Create synthetic biosignals
    ecg = 0.8 * np.sin(2 * np.pi * 1.5 * t) + 0.1 * np.random.randn(len(t))
    eeg = (0.4 * np.sin(2 * np.pi * 10 * t) + 
           0.15 * np.sin(2 * np.pi * 22 * t + 0.5) + 
           0.1 * np.random.randn(len(t)))
    emg = 0.15 * np.random.randn(len(t)) + 0.05 * np.sin(2 * np.pi * 50 * t)
    
    signals = {'ecg': ecg, 'eeg': eeg, 'emg': emg}
    
    # Create ground truth
    ground_truth = 0.5 * ecg + 0.3 * eeg + 0.2 * emg
    
    # Run benchmark
    benchmark_results = metrics.benchmark_fusion_methods(signals, ground_truth)
    
    # Generate report
    metrics.generate_performance_report(benchmark_results)
    
    # Create visualizations
    metrics.create_performance_visualizations(benchmark_results)
    
    return benchmark_results

if __name__ == "__main__":
    results = main()
