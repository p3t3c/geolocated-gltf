import pyvista as pv


def create_geobox():
    """
    Function creates a GLTF file called geobox.gltf
    A large rectangle is created and placed at x=0, y=0, z=earth radius
    This will appear at "null island" the 0 degrees latitude and longitude

    :return:
    """
    # Reasonable approximation of earth radius.
    earth_radius_metres = 6377172.0
    big_red_box = pv.Cube(center=(earth_radius_metres, 0, 0), x_length=500, y_length=2000, z_length=500, clean=False)

    pl = pv.Plotter()
    _ = pl.add_mesh(big_red_box, color='red', smooth_shading=True, show_scalar_bar=False)
    pl.export_gltf('geobox.gltf')


if __name__ == '__main__':
    create_geobox()