#!/bin/bash
# Send a POST request with JSON data from a file and display the response body
curl -sX POST -H "Content-Type: application/json" -d @"$2" "$1"
