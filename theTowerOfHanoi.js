var playing = true; //game will play until this is false

//reads numberOfDisks from what the user enters in inputDiskNumber form
var numberOfDisks = $("input[type=text][name=numberOfDisksEntered]").val();

/************************************
//                                  *
//          Disk Class              *
//                                  *
//***********************************/

Disk class definition
class Disk {
  constructor(size, color) {
    this.tower = 0; //the tower the disk is currently located
    this.size = size; //size increases with order
    this.color = color; //disk color
    this.width = `${(size + 4) * 15}px`; //calculates disk width so top disk is
                                         //the narrowest
    this.height = "13px"; //same height for all the disks
  }
}
