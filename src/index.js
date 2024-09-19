function knightMoves(cord1, cord2) {
    let graph = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    let clone = [];
    let count = 0;
    let stepTrack = [];
    let track;
    let queue = [];
    let beenTo = [];
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            clone.push({ index: [i, j], neighbors: [], step: 1 });
        }
    }
    for (let i = graph.length - 1; i >= 0; i--) {
        for (let j = 0; j < graph[i].length; j++) {
            let tempI = i;
            let tempJ = j;
            tempI += 2;
            tempJ += 1;
            if (
                tempI < graph.length &&
                tempI >= 0 &&
                tempJ < graph[i].length &&
                tempJ >= 0
            ) {
                for (const item of clone) {
                    if (item.index[0] === i && item.index[1] === j) {
                        item.neighbors.push([tempI, tempJ]);
                    }
                }
            }
            tempI = i;
            tempJ = j;
            tempI += 1;
            tempJ += 2;
            if (
                tempI < graph.length &&
                tempI >= 0 &&
                tempJ < graph[i].length &&
                tempJ >= 0
            ) {
                for (const item of clone) {
                    if (item.index[0] === i && item.index[1] === j) {
                        item.neighbors.push([tempI, tempJ]);
                    }
                }
            }
            tempI = i;
            tempJ = j;
            tempI -= 1;
            tempJ += 2;
            if (
                tempI < graph.length &&
                tempI >= 0 &&
                tempJ < graph[i].length &&
                tempJ >= 0
            ) {
                for (const item of clone) {
                    if (item.index[0] === i && item.index[1] === j) {
                        item.neighbors.push([tempI, tempJ]);
                    }
                }
            }
            tempI = i;
            tempJ = j;
            tempI -= 2;
            tempJ += 1;
            if (
                tempI < graph.length &&
                tempI >= 0 &&
                tempJ < graph[i].length &&
                tempJ >= 0
            ) {
                for (const item of clone) {
                    if (item.index[0] === i && item.index[1] === j) {
                        item.neighbors.push([tempI, tempJ]);
                    }
                }
            }
            tempI = i;
            tempJ = j;
            tempI -= 2;
            tempJ -= 1;
            if (
                tempI < graph.length &&
                tempI >= 0 &&
                tempJ < graph[i].length &&
                tempJ >= 0
            ) {
                for (const item of clone) {
                    if (item.index[0] === i && item.index[1] === j) {
                        item.neighbors.push([tempI, tempJ]);
                    }
                }
            }
            tempI = i;
            tempJ = j;
            tempI -= 1;
            tempJ -= 2;
            if (
                tempI < graph.length &&
                tempI >= 0 &&
                tempJ < graph[i].length &&
                tempJ >= 0
            ) {
                for (const item of clone) {
                    if (item.index[0] === i && item.index[1] === j) {
                        item.neighbors.push([tempI, tempJ]);
                    }
                }
            }
            tempI = i;
            tempJ = j;
            tempI += 1;
            tempJ -= 2;
            if (
                tempI < graph.length &&
                tempI >= 0 &&
                tempJ < graph[i].length &&
                tempJ >= 0
            ) {
                for (const item of clone) {
                    if (item.index[0] === i && item.index[1] === j) {
                        item.neighbors.push([tempI, tempJ]);
                    }
                }
            }
            tempI = i;
            tempJ = j;
            tempI += 2;
            tempJ -= 1;
            if (
                tempI < graph.length &&
                tempI >= 0 &&
                tempJ < graph[i].length &&
                tempJ >= 0
            ) {
                for (const item of clone) {
                    if (item.index[0] === i && item.index[1] === j) {
                        item.neighbors.push([tempI, tempJ]);
                    }
                }
            }
        }
    }
    function check(obj, cord2) {
        let objBeenToFlag = false;
        if (obj.index[0] === cord2[0] && obj.index[1] === cord2[1]) {
            track = obj.prevStep;
            stepTrack.push(obj.index);
            return;
        }

        for (const item of beenTo) {
            if (item[0] === obj.index[0] && item[1] === obj.index[1]) {
                objBeenToFlag = true;
                break;
            }
        }
        if (!objBeenToFlag) {
            beenTo.push(obj.index);
        }
        for (const neighbor of obj.neighbors) {
            let flag = false;
            for (const item of beenTo) {
                if (neighbor[0] === item[0] && neighbor[1] === item[1]) {
                    flag = true;
                }
            }
            if (flag) {
                continue;
            }
            for (const item of clone) {
                if (
                    item.index[0] === neighbor[0] &&
                    item.index[1] === neighbor[1]
                ) {
                    item.prevStep = obj.index;
                    queue.push(item);
                    break;
                }
            }
        }
        // console.log(obj.index);
        check(queue.shift(), cord2);
    }
    for (const item of clone) {
        if (item.index[0] === cord1[0] && item.index[1] === cord1[1]) {
            queue.push(item);
            check(queue.shift(), cord2);
            break;
        }
    }
    do {
        for (const item of clone) {
            if (cord1[0] === cord2[0] && cord1[1] === cord2[1]) {
                break;
            }
            if (item.index[0] === track[0] && item.index[1] === track[1]) {
                count++;
                stepTrack.push(track);
                track = item.prevStep;
                break;
            }
        }
    } while (track);
    console.log(`You made it in ${count} moves! Here is your path:`);
    for (let i = stepTrack.length - 1; i >= 0; i--) {
        console.log(stepTrack[i]);
    }
}

knightMoves([0, 0], [0, 0]);
