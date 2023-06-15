function bubblesort(set) {
    
    const length = set.length;
  
    for (let i = 0; i < length - 1; i++) {
        
        for (let j = 0; j < length - 1 -i; j++) {
            
            if (set [j] > set [j +1]) {
                
                [set[j], set[j + 1]] = [set[j + 1], set[j]];
            }
        }
    }
  
      return set;
  
  }
  
  
  const sampleset = [5,3,8,1,2]; 
  console.log(bubblesort(sampleset))