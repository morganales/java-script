const produto1 = "queijo"
const produto2 = "café"
const produto3 = "leite"

if (produto1 == "queijo" && produto2 == "café" && produto3 == "pão") {
    console.log("Suas compras estão corretas!")
} else if (produto1 == "queijo" || produto2 == "café" || produto3 == "pão"){
   console.log("Você não trouxe todas as compras!")
}