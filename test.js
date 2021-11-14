describe("pow", function() {

    function makeTest(x)
    {
        let expected = x * x * x;
        it(`${ x } in the power 3 is ${ expected }`, function ()
        {
            assert.equal(pow(x,3), expected)
        })
    }
    for (let x = 1; x <= 5; x++){
        makeTest(x)
    }
  
  });








// describe("pow", function() {

//     it("raises to n-th power", function() {
//       assert.equal(pow(2, 3), 8);
//       assert.equal(pow(3, 4), 81);
//     });
  
//   });