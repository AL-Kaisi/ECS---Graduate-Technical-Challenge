

function createMenuData(data) {
  
    //Result Array 
    

    results = new Array();
    
    const test = data;
    for(i = 0; i < test.length; i++){
        //Store the split value of an object in the array
       temp = test[i].split("/");
       
       //Make sure the parent has a child
       if(temp.length ==2){
        let person = {title: temp[0],data:[temp[1]]};
        
        var ifExists = -1;
        if(results.length !== 0 ){
          
            //Check the results for existing parents!
            //if parent exists return array position, if not keep value -1 
            for (var x = 0; x < results.length; ++x) { 
               
                if (results[x].title == person.title ) {
                    //Set the position of the parent in the array
                    ifExists = x;
                }
                    
            }
            if(ifExists == -1){
              results.push(person);
            }else {
                //Push data to existing parent
                results[ifExists].data.push(temp[1]);
            }

        }else{
            //push object to an empty array 
            results.push(person);
         
        }
    }
    }
    
    return results;

   
    
}

 


describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
        // Input data
        const data = [
            "parent1/parent1child",
            "parent1/parent1child2",
            "parent2/parent2child",
            "parent2/parent2child2",
            "parent1/parent1child3",
            "parent3",
            "parent3/parent3child1",
            "parent4"
        ];

        // Expected output data
        const expectedResult = [{
                title: "parent1",
                data: ["parent1child", "parent1child2", "parent1child3"]
            },
            { title: "parent2", data: ["parent2child", "parent2child2"] },

            { title: "parent3", data: ["parent3child1"] }
        ];

        const actualResult = createMenuData(data);
        expect(actualResult).toMatchObject(expectedResult);
    });
});