//@ts-nocheck
"use client"
import React, { useEffect } from "react";

// Declare global TradingView type
declare global {
  interface Window {
    TradingView: any;
  }
}

function Watchlist() {
  useEffect(() => {
    // Initialize TradingView widget after component mounts
    const widget = new window.TradingView.widget({
      container: "chartContainer",
      locale: "en",
      library_path: "charting_library/",
      datafeed: new Datafeeds.UDFCompatibleDatafeed(
        "https://demo-feed-data.tradingview.com"
      ),
      symbol: "AAPL",
      interval: "1D",
      fullscreen: true,
      debug: true,
    });
  }, []);

  return (
    <div>
      <div className="h-screen w-full" id="chartContainer"></div>
    </div>
  );
}

export default Watchlist;
