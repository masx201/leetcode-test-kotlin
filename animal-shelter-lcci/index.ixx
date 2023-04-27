module;
#include <iso646.h>
#include <queue>
#include <vector>

export module animal_shelter_lcci.AnimalShelf;
using std::queue;
using std::vector;
namespace animal_shelter_lcci {
export class AnimalShelf {

private:
    queue<int> cats;
    queue<int> dogs;

public:
    AnimalShelf() = default;

    void enqueue(vector<int> animal)
    {

        auto number = animal[0];
        auto species = animal[1];

        if (0 == species) {
            cats.push(number);
        } else {

            dogs.push(number);
        }
    }

    vector<int> dequeueAny()

    {

        if (dogs.empty() and cats.empty()) {
            return { -1, -1 };
        }

        if (dogs.empty() and (cats.size())) {
            return dequeueCat();
        }
        if (cats.empty() and (dogs.size())) {
            return dequeueDog();
        }

        auto dog = dogs.front();
        auto cat = cats.front();

        if (dog < cat) {

            dogs.pop();
            return { dog, 1 };
        } else {

            cats.pop();
            return { cat, 0 };
        }
    }

    vector<int> dequeueDog()
    {
        if (dogs.empty()) {
            return { -1, -1 };
        } else {
            auto number = dogs.front();
            dogs.pop();

            return { number, 1 };
        }
    }

    vector<int> dequeueCat()
    {
        if (cats.empty()) {
            return { -1, -1 };
        } else {
            auto number = cats.front();
            cats.pop();

            return { number, 0 };
        }
    }
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * AnimalShelf* obj = new AnimalShelf();
 * obj->enqueue(animal);
 * vector<int> param_2 = obj->dequeueAny();
 * vector<int> param_3 = obj->dequeueDog();
 * vector<int> param_4 = obj->dequeueCat();
 */
}