const playing = true; //game will play until this is false
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
    this.width = `${(size + 4) * 15}px`; //calculates disk width so top disk is
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
  $(`#${diskVar}`).css({
      background: disk.color,
      width: disk.width,
      height: disk.height
    });
}

//adds disks to the tower0 rod in the beginning of the program
const addDisks = function initialAddDisks() {
  /* create three disks to append to #tower0's rod. Use
  the i value from this for loop to when creating
  the disk's size in the disk constructor above */
  for (var i = 0; i < numberDisks; i++) {
    const diskVar = `diskHtmlId${i}`;
    const disk = new Disk(i, generateColor());
    $(`<div class="disk" id="${diskVar}"></>`).appendTo("#tower0 .rod");
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

//allows disk dragging functionality for eligible disks
const drag = function dragDisk() {

};


build();
