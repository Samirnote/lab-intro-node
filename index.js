class SortedList {

  constructor(items, length) {
    this.items=[];
    this.length= 0;
  }

  add(item) {
    this.length=this.items.push(item);
    this.items.sort((a,b)=> a-b);
  }

  get(pos) {
    if (pos>=this.length){
      throw new OutOfBounds();
    }
    else{
    return this.items[pos]};
                                                                                                                            
  }

  max() {
    if (!this.length){
      throw new EmptySortedList();
    }
    return this.items[this.length-1];
  }

  min() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    }
    
    return this.items[0];
  }

  sum() {
    return this.items.reduce(add, 0);

   function add(accumulator, a) {
    return accumulator + a;
    }
  }

  avg() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.length;
  }
}


module.exports = SortedList;
