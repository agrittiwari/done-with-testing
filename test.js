describe("pow", function ()
{
    it("for negative n, the result is NaN", function (){
        assert.isNaN(pow(2,-1))
        })
        it("for non integer values, the result is NaN", function ()
        {
            assert.isNaN(pow(2, 1.5))
        })
    describe("raises to the power 3", function ()
    {
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
    })

    //other tests here....

})

describe("test", function() {

    before(() => alert("Testing started – before all tests"));
    after(() => alert("Testing finished – after all tests"));
  
    beforeEach(() => alert("Before a test – enter a test"));
    afterEach(() => alert("After a test – exit a test"));
  
    it('test 1', () => alert(1));
    it('test 2', () => alert(2));
  
  });


// describe("pow", function ()
// {

//     function makeTest(x)
//     {
//         let expected = x * x * x;
//         it(`${ x } in the power 3 is ${ expected }`, function ()
//         {
//             assert.equal(pow(x,3), expected)
//         })
//     }
//     for (let x = 1; x <= 5; x++){
//         makeTest(x)
//     }
  
//   });


//   describe("pow", function() {

//     it("2 raised to power 3 is 8", function() {
//       assert.equal(pow(2, 3), 8);
//     });
  
//     it("3 raised to power 4 is 81", function() {
//       assert.equal(pow(3, 4), 81);
//     });
  
//   });





// describe("pow", function() {

//     it("raises to n-th power", function() {
//       assert.equal(pow(2, 3), 8);
//       assert.equal(pow(3, 4), 81);
//     });
  
//   });