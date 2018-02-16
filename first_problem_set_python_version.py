import numpy as np
import matplotlib.pyplot as plt

def get_random( n ):
    with open("unify_data.txt") as f:
        content = f.readlines()
        arr = np.asarray([int(x) for x in content])
        return arr[:n]

def main():
    temp_list = get_random(10000)
    temp_list = np.append(temp_list, get_random(6384))
    temp_list = temp_list.reshape(128, 128)

    diagram = plt.imshow(temp_list)
    diagram.set_cmap('rainbow')
    plt.show()
if __name__ == "__main__":
    main()