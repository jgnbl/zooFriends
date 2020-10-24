let treeImage1 = document.getElementById("tree1");
 let treeImage2 = document.getElementById("tree2");
 let treeImage3 = document.getElementById("tree3");
 const lionPath = "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
 const monkeyPath = "https://images.unsplash.com/photo-1562708365-d88c4606661c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
 const zebraPath = "https://images.unsplash.com/photo-1579926301332-7bcf0bc56109?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
 const treePath = "https://images.unsplash.com/photo-1446388356081-508ba00ad58b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";

 let startButton = document.getElementById("start");
 let numOfTrees = 3;
 let tree1, tree2, tree3;
 let currentPlaying = true;
 const isLion = (tree) => {
     if (tree.src === lionPath) {
         return true;
     } else {
         return false;
     }
 }
 const isClicked = tree => {
     if (tree.src === treePath) {
         return false;
     } else {
         return true;
     }
 }
 const playTree = (tree) => {
     numOfTrees--;
     if (numOfTrees === 0) {
         gameOver('win');
     }
     else if (isLion(tree) === true) {
         return gameOver();
     }
 }
 const animalGenerator = () => {
     let animalTree = Math.floor(Math.random() * numOfTrees);
     if (animalTree === 0) {
         tree1 = lionPath;
         tree2 = monkeyPath;
         tree3 = zebraPath;
     } else if (animalTree === 1) {
         tree2 = lionPath;
         tree1 = monkeyPath;
         tree3 = zebraPath;
     } else { (animalTree === 3)
         tree3 = lionPath;
         tree2 = zebraPath;
         tree1 = monkeyPath;
     }
 }
 treeImage1.onclick = () => {
     if (!isClicked(treeImage1) && currentPlaying) {
         treeImage1.src = tree1;
         playTree(treeImage1);
     }
 };
 treeImage2.onclick = () => {
     if (!isClicked(treeImage2) && currentPlaying) {

         treeImage2.src = tree2;
         playTree(treeImage2);
     }
 }

 treeImage3.onclick = () => {
     if (!isClicked(treeImage3) && currentPlaying) {

         treeImage3.src = tree3;
         playTree(treeImage3);
     }
 }

 const startRound = () => {
     treeImage1.src = treePath;
     treeImage2.src = treePath;
     treeImage3.src = treePath;
     numOfTrees = 3;
     startButton.innerHTML = "Good luck!";
     currentPlaying = true;
     animalGenerator();
 }

 startButton.onclick = () => {
     if (!currentPlaying) {
         startRound();
     }
 }
 const gameOver = (status) => {
     if (status === 'win') {
         startButton.innerHTML = "You win! Play again?";
     } else {
         startButton.innerHTML = "Game over! Play again?"
     }
     currentPlaying = false;
 }
 startRound();
