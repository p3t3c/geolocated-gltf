# Geolcoated GLFT Creation

Uses PyVista to create geometry in cartesian ECEF.


## Run

###  First time

Recreate the environment from the exported file:

```bash
conda env create -f environment.yml
```

## Update Environement

This command updates the environment based on changes in the environment.yml file and removes unnecessary packages
```bash
./update-packages.sh
```