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
const color = function getRandomColor() {
  let values = "0123456789ABCDEF";
  let hash = "#";
  const HEX_DIGITS = 6;
  for (let i = 0; i < HEX_DIGITS; i += 1) {
    hash += values[Math.floor(Math.random() * 16)];
  }
  return hash;
};

//allows disk dragging functionality for eligible disks
const drag = function dragDisk() {

};
