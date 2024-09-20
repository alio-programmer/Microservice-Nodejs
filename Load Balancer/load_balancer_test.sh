#!/bin/bash

#loop to send requests
for((i=0; i<10; i++)); do
    curl "http://localhost:8000" &
done

wait 
echo "All requests have been sent"