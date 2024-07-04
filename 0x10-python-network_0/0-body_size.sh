#!/bin/bash
# Script to get the size of the body of the response from a URL
curl -sI "$1" | grep -i Content-Length | awk '{print $2}' | tr -d '\r'
