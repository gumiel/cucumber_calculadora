const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;


Given('In open the calculator page', async function(){
    // await testController.navigateTo('http://localhost/calculadora/index.php'); // ingresa a la pagina de la calculadora
    await testController.navigateTo('http://localhost/calculadora/index.php?operacion=sumar'); // ingresa a la pagina de la calculadora
});

When ('I enter the first value {string}', async function (valor1){
    let input = Selector("input#valor1").with({ boundTestRun:testController}); // busca un campo de html
    await testController.typeText(input, valor1); // ingresa un valor al campo seleccionado
});

When('I enter the second value {string}', async function (valor2) { 
    let input = Selector('input#valor2').with({ boundTestRun: testController });// busca un campo de html
    await testController.typeText(input, valor2); // ingresa un valor al campo seleccionado
});

When('I click on the calculate button', async function () {
    await this.addScreenshotToReport();// saca capturas de pantalla y envia a la carpeta reports
    let button = Selector('button').with({ boundTestRun: testController });
    await testController.click(button);
});

Then('The correct sum on screen', async function(){
    let responseCard = Selector("h2#resultado").with({ boundTestRun: testController });
    
    await testController.expect(responseCard.innerText).contains("3");
    await this.addScreenshotToReport(); // saca capturas de pantalla y envia a la carpeta reports
});

