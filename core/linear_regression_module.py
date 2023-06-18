import numpy as np

def estimate_coef(x, y):
    n = np.size(x)
    m_x = np.mean(x)
    m_y = np.mean(y)
    SS_xy = np.sum(y*x) - n*m_y*m_x
    SS_xx = np.sum(x*x) - n*m_x*m_x
    b_1 = SS_xy / SS_xx
    b_0 = m_y - b_1*m_x
    return (b_0, b_1)

def get_regression_coordinates(x, y, b):
    y_pred = b[0] + b[1]*x
    coordinates = [{'x': x_val, 'y': y_val} for x_val, y_val in zip(x, y_pred)]
    return coordinates

def main():
    x = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    y = np.array([1, 3, 2, 5, 7, 8, 8, 9, 10, 12])
    b = estimate_coef(x, y)
    coordinates = get_regression_coordinates(x, y, b)
    print("Regression coordinates:")
    for coordinate in coordinates:
        print(coordinate)
