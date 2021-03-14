// Sleep function to view sorting process
function sleep() {
    return new Promise(resolve => setTimeout(resolve, 550));
}

// splice called on array, at index with replacement value
// returns an array
function arraySetWithoutIndexes(array, index, value) {
    array.splice(index, 1, value);
}

// swap function gets passed array and indices that will swap
function arraySwap(array, indexA, indexB) {

    var x = array[indexA];
    arraySetWithoutIndexes(array, indexA, array[indexB]);
    arraySetWithoutIndexes(array, indexB, x);

}

// Shuffle function that takes an array as parameter
// Calls arraySwap function
// await sleep()
async function shuffle(a) {
    
    var j, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        arraySwap(a, i, j);
        await sleep();
    }

}

async function bubbleSort(a) {

    var len = a.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (a[j - 1] > a[j]) {
                arraySwap(a, j - 1, j);
                await sleep();
            } 
        }
    }
    
}

async function selectionSort(a) { 

    var minIndex, temp, 
    len = a.length;

    for (var i = 0; i < len; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if(a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        
        arraySwap(a, i, minIndex);
        await sleep();
    }

}

async function insertionSort(a) {
    
    var i, len = a.length, el, j;

    for (i = 1; i < len; i++) {
        el = a[i];
        j = i;

        while (j > 0 && a[j - 1] > el) {
            a[j] = a[j - 1];
            j--;
        }

        arraySetWithoutIndexes(a, j, el);
        await sleep();
    }

}
