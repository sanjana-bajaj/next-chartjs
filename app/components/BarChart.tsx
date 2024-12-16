"use client"
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
  
export const BarChart = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null); // Ref for canvas element
    let chartInstance: Chart | null = null; // To hold the Chart instance

    useEffect(() => {
        if (chartRef.current) {
          const context = chartRef.current.getContext('2d'); // Access canvas context
          if (context) {
            // Destroy existing chart instance before creating a new one
            if (chartInstance) {
              chartInstance.destroy();
            }
    
            // Create a new Chart instance
            chartInstance = new Chart(context, {
              type: 'bar', // Example chart type
              data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [
                  {
                    label: 'Sales',
                    data: [10, 20, 30, 40, 20, 65, 10, 34, 67, 90, 78, 20],
                    backgroundColor: [
                        "rgb(255, 99, 132, 0.2)",
                        "rgb(255, 159, 64, 0.2)",
                        "rgb(255, 205, 86, 0.2)",
                        "rgb(75, 192, 192, 0.2)",
                        "rgb(54, 162, 235, 0.2)",
                        "rgb(153, 102, 207, 0.2)",
                        "rgb(201, 203, 207, 0.2)"
                    ],
                    borderColor: "blue",
                    borderWidth: 1
                  },
                ],
              },
              options: {
                scales: {
                    x: {
                        type: "category"
                    },
                    y: {
                        beginAtZero: true
                    }
                }
              },
            });
          }
        }
    
        // Cleanup function to destroy the chart instance
        return () => {
          if (chartInstance) {
            chartInstance.destroy();
          }
        };
    }, []);
    return(<>
    <div className="relative w-[90vw] h-[80vh]">
        <canvas ref={chartRef}></canvas>;
    </div>

    </>)
}