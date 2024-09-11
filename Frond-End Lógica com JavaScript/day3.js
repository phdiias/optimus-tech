// #7DaysOfCode - Lógica JS 3/7: Fluxo de decisão

// Escolher a Área
const escolherArea = () => {
  area = prompt("Escolha uma área desejada:\n1. Front-End\n2. Back-End")
  if (area == 1) {
    area = "Front-End"
  } else {
    area = "Back-End"
  }
}

// Escolher a Linguagem
const escolherLinguagem = (area) => {
  let linguagem
  if (area == "Front-End") {
    linguagem = prompt("Escolha uma linguagem:\n1. React\n2. Vue")
  } else {
    linguagem = prompt("Escolha uma linguagem:\n1. C#\n2. Java")
  }

  if (area == "Front-End" && linguagem == 1) {
    linguagem = "React"
  } else if (area == "Front-End" && linguagem == 2) {
    linguagem = "Vue"
  } else if (area == "Back-End" && linguagem == 1) {
    linguagem = "C#"
  } else {
    linguagem = "Java"
  }
}

const escolherCaminho = (area) => {
  let caminho = prompt(
    `\n1. Você quer se especializar em ${area}\n2. Ou você quer seguir para o FullStack? `
  )
  if (caminho == 1) {
    alert(
      "Especializar-se em Front-End é uma excelente escolha para quem gosta de criar interfaces interativas e visualmente atraentes. Você terá a oportunidade de transformar ideias em experiências visuais reais."
    )
    caminho = area
  } else {
    alert(
      "Optar por FullStack é uma excelente escolha para quem deseja ter uma visão completa do desenvolvimento web, abrangendo tanto o Front-End quanto o Back-End. Você se tornará um desenvolvedor versátil e completo."
    )
    caminho = "FullStack"
  }
}

// Adicionar tecnologias
const adicionarTecnologias = () => {
  let tecnologias = []
  let maisTecnologias = true

  while (maisTecnologias) {
    const tecnologia = prompt(
      "Qual tecnologia você gostaria de se especializar ou de conhecer?"
    )
    if (tecnologia) {
      tecnologias.push(tecnologia)
      maisTecnologias = confirm(
        "Tem mais alguma tecnologia que você gostaria de se especializar ou conhecer?"
      )
    } else {
      alert("Você não inseriu uma tecnologia. Tente novamente.")
    }
  }

  tecnologias.forEach((tecnologia) => {
    alert(
      `Ótima escolha! A tecnologia ${tecnologia} é muito valorizada no mercado.`
    )
  })
}

const executarProjeto = () => {
  escolherArea()
  escolherLinguagem(area)
  escolherCaminho(area)
  adicionarTecnologias()
}

executarProjeto()
