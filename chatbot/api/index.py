"""
Vercel serverless function entry point for FastAPI app
"""
import sys
import os

# Add parent directory to path to import app
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.server import app

# Export the app for Vercel Python runtime
# Vercel's Python runtime handles FastAPI apps directly
handler = app

