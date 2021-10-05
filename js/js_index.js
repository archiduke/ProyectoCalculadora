
        const boton = document.getElementById("boton"); /* creamos el boton */
         
        boton.onclick = function () { /* click en el boton */

            const operar = document.querySelectorAll('input[name="operacion"]');
            let parrafo = document.getElementById("solucion"); 
            let seleccion;
            const num1 = +document.getElementById("numero1").value; 
            const num2 = +document.getElementById("numero2").value;
            let resultado = 0;

            for (const elegir of operar) { /* bucle para elegir el radio button elegido */

                if (elegir.checked) {

                    seleccion = elegir.value;
                    break;
                }
            }

            document.querySelector('.boton').onmousemove = (e) => {

                const x = e.pageX - e.target.offsetLeft
                const y = e.pageY - e.target.offsetTop
            
                e.target.style.setProperty('--x', `${ x }px`)
                e.target.style.setProperty('--y', `${ y }px`)
                
            }

            /* ahora hacemos la operacion elegida, mediante ifs */

            if(seleccion == "suma") { /* sumar */

            resultado = num1 + num2;
            parrafo.innerHTML = num1 + " + " + num2 + " = " + resultado;

            } if (seleccion == "resta") { /* restar */

            resultado = num1 - num2;
            parrafo.innerHTML = num1 + " - " + num2 + " = " + resultado;

            } if (seleccion == "multi") { /* multi */

            resultado = num1 * num2;
            parrafo.innerHTML = num1 + " x " + num2 + " = " + resultado;

            } if (seleccion == "divi") { /* dividir */

            resultado = num1 / num2;
            resultado = +resultado.toFixed(3);
            parrafo.innerHTML = num1 + " / " + num2 + " = " + resultado;

            }
        }