const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;


Given('En la pagina de resta', async function(){
    // await testController.navigateTo('http://localhost/calculadora/index.php'); // ingresa a la pagina de la calculadora
    await testController.navigateTo('http://localhost/calculadora/index.php?operacion=restar'); // ingresa a la pagina de la calculadora
});

When('Ingresamos el primer valor para restar {string}', async function (valor1){
    let input = Selector("input#valor1").with({ boundTestRun:testController}); // busca un campo de html
    await testController.typeText(input, valor1); // ingresa un valor al campo seleccionado
});

When('Ingresamos el segundo valor para restar {string}', async function (valor2) { 
    let input = Selector('input#valor2').with({ boundTestRun: testController });// busca un campo de html
    await testController.typeText(input, valor2); // ingresa un valor al campo seleccionado
});

When('Realizamos click en el boton restar', async function () {
    await this.addScreenshotToReport();// saca capturas de pantalla y envia a la carpeta reports
    let button = Selector('button').with({ boundTestRun: testController });
    await testController.click(button);
});

Then('Muestra el valor restados', async function(){
    let responseCard = Selector("h2#resultado").with({ boundTestRun: testController });
    
    await testController.expect(responseCard.innerText).contains("1");
    await this.addScreenshotToReport(); // saca capturas de pantalla y envia a la carpeta reports
});

