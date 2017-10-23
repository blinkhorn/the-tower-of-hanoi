let playing = true; //game will play until this is false
const moveCount = 0;

//reads numberDisks from what the user enters in inputDiskNumber form
const numberDisks = $('input[type=text][name=numberDisksEntered]').val();

/************************************
//                                  *
//          Disk Class              *
//                                  *
//***********************************/

class Disk {
  constructor(size, color) {
    this.tower = 0; //the tower the disk is currently located
    this.size = size; //size increases with order
    this.color = color; //disk color
    this.width = `${ (size + 4) * 15}px`; //calculates disk width so top disk is
    //the narrowest
    this.height = '13px'; //same height for all the disks
  }
}

/************************************
//                                  *
//      Function Expressions        *
//                                  *
//***********************************/

//generates a random color that the disk may use
const generateColor = function generateRandomColor() {
  let values = "0123456789ABCDEF";
  let hash = "#";
  const HEX_DIGITS = 6;
  for (let i = 0; i < HEX_DIGITS; i += 1) {
    hash += values[Math.floor(Math.random() * 16)];
  }
  return hash;
};

//adds CSS to disks as they are created in initialAddDisks()
const diskCSS = function addDiskCSS(diskVar, disk) {
  $(`#${diskVar}`).css({background: disk.color, width: disk.width, height: disk.height});
}

//adds disks to the tower0 rod in the beginning of the program
const addDisks = function initialAddDisks() {
  /* create three disks to append to #tower0's rod. Use
  the i value from this for loop to when creating
  the disk's size in the disk constructor above */
  for (var i = 0; i < numberDisks; i++) {
    let diskVar = `diskHtmlId${i}`;
    let disk = new Disk(i, generateColor());
    $(`<div class='disk' id='${diskVar}'></>`).appendTo('#tower0 .rod');
    diskCSS(diskVar, disk);
  }
};

//builds the rods and base of towers and then calls buildDisks to append disks
//onto the first rod
const build = function buildTowers() {
  //append rod and base divs to each of the three towers
  $(`<div class='rod'></>`).appendTo('.tower');
  $(`<div class='base'></>`).appendTo('.tower');

  addDisks();
};

//makes the top disk in each tower draggable and gives it a movable class
const dragTop = function dragTopDisk() {
  $('.disk').first().draggable({containment: '.playingField', cursor: 'move', stack: '.disk', revert: true});
  $('.disk').first().addClass('movable');
};

//returns true if disk can be dropped on rod, false if it isn't eligible
const goodDrop = function goodDiskDrop(rod, disk) {
  let disks = $(rod).children();
  return (disks.length === 0) || (disks.css('width') >= rod.css('width'));
};

//if disk can be dropped on rod, function allows this; if not, function sends
//disk back to original tower
const dropLogic = function diskDropLogic(dropTower, disk) {
  if (goodDrop(dropTower, disk)) {
    $(disk.detach()).prependTo(dropTower);
    disk.draggable('option', 'revert', false);
  } else {
    disk.draggable('option', 'revert', true);
  }
};

//returns true if user wins
const gameOver = function userWinsGame(tower) {
  //returns true if not on first tower and if all disks are stacked up
  return ((tower.className !== '#tower0 .rod') && ($(tower).find('.rod').children().length === numberDisks));
};


//finds the tower disk is being dropped on and calls dropLogic to test whether
//drop is eligible
const handleDrop = function handleDiskDrop(event, ui) {
  let diskDropTower = $(this);
  dropLogic(diskDropTower, ui.draggable);
  return gameOver(event.target);
};

//drops disk on rod if possible
const dropDisk = function dropOnRod() {
  $('.rod').droppable({accept: '.movable', hoverClass: 'hovered', drop: handleDrop});
  return handleDrop;
};

//makes the top disks on rods draggable; calls dropDisk to allow for disks to
//be dropped on the rod its dragged to
const move = function moveDisk() {
  dragTop();
  return dropDisk();
};

/************************************
//                                  *
//          Function calls          *
//                                  *
//***********************************/

build();

while (playing) {
  if (move()) {
    playing = false;
  }
}
