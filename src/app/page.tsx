"use client"
import React, { useEffect } from "react";

// Declare global TradingView type with proper typing
declare global {
  interface Window {
    TradingView: {
      widget: new (config: TradingViewWidgetConfig) => TradingViewWidget;
    };
    Datafeeds: {
      UDFCompatibleDatafeed: new (url: string) => unknown;
    };
  }
}

// Define TradingView widget configuration interface
interface TradingViewWidgetConfig {
  container: string;
  locale: string;
  library_path: string;
  datafeed: unknown;
  symbol: string;
  interval: string;
  fullscreen: boolean;
  debug: boolean;
}

// Define TradingView widget interface
interface TradingViewWidget {
  // Add any widget methods you need
  remove?: () => void;
}

function Watchlist() {
  useEffect(() => {
    // Check if TradingView is available
    if (typeof window !== 'undefined' && window.TradingView && window.Datafeeds) {
      try {
        // Initialize TradingView widget after component mounts
        const widget: TradingViewWidget = new window.TradingView.widget({
          container: "chartContainer",
          locale: "en",
          library_path: "charting_library/",
          datafeed: new window.Datafeeds.UDFCompatibleDatafeed(
            "https://demo-feed-data.tradingview.com"
          ),
          symbol: "AAPL",
          interval: "1D",
          fullscreen: true,
          debug: true,
        });

        // Cleanup function
        return () => {
          if (widget && widget.remove) {
            widget.remove();
          }
        };
      } catch (error) {
        console.error("Failed to initialize TradingView widget:", error);
      }
    } else {
      console.warn("TradingView or Datafeeds not available");
    }
  }, []);

  return (
    <div>
      <div className="h-screen w-full" id="chartContainer"></div>
    </div>
  );
}

export default Watchlist;