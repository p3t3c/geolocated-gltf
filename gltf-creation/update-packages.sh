#!/bin/bash

pip_packages=$(conda env export | grep -A9999 ".*- pip:" | grep -v "^prefix: " | cut -f1 -d"=")

# Export conda environment without builds, and append pip packages
conda env export --from-history | grep -v "^prefix: " > environment.yml
echo "$pip_packages" >> environment.yml
