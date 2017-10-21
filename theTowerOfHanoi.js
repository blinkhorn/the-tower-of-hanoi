var playing = true; //game will play until this is false
var moveCount = 0;

//reads numberDisks from what the user enters in inputDiskNumber form
var numberDisks = $('input[type=text][name=numberDisksEntered]').val();

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




while (numberDisks < 1) {
    console.error('You must play with at least 1 disk.');
    $(inputDiskNumber).on('submit')
  }
