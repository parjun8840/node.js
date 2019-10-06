#!/bin/bash
sleep 5
echo "From different entrypoint" > /opt/test.txt
exec $@
