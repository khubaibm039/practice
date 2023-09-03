loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    // console.log(data.data.tools);
    const tools = data.data.tools
    cards(tools);
}

const cards = (ai) => {
    console.log(ai.length)

    const btn = document.getElementById('btn')
    if (ai.length > 6) {
        btn.classList.remove('hidden')
    }
    else {
        btn.classList.add('hidden')
    }
    ai = ai.slice(0, 6)
    const cardContainer = document.getElementById('card-container')
    for (const tool of ai) {
        // console.log(tool)
        const cardDiv = document.createElement('div')
        cardDiv.className = `rounded-lg  bg-base-100 shadow-xl`;
        cardDiv.innerHTML = `
        
      <div  onclick="handleShowDetails('${tool.id}') ">
      <div class="h-1/2 " ><figure >
      <img class=" rounded-lg" src="${tool.image}" alt="${tool.name}" />
      </figure></div>
      <div class="card-body h-1/2">
          <h2 class="card-title">Features</h2>
          <ul class="list-decimal	pl-6">
              <li> ${tool.features[0]}</li>
              <li> ${tool.features[1]}</li>
              <li> ${tool.features[2]}</li>
          </ul>
          <div class="border border-gray-400"></div>
        <h2 class="card-title">${tool.name}</h2>
        <p>${tool.published_in}</p>
      </div>
      </div>
        
        `
        cardContainer.appendChild(cardDiv)
    }
}
//

const handleShowDetails = async (id) => {
    // console.log('showDetails')
    console.log(id)

    const res = await fetch(` https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json();
    // console.log(data.data)
    showFulldetails(data.data)
}

const showFulldetails = (data) => {
    console.log(data)

    const showDetails = document.getElementById('show-details')
    showDetails.innerHTML = `
    <div class="flex bg-base-200 rounded-xl p-[126px] justify-between gap-4">

    <div class="w-1/2 ">
        <h1 class="text-xl font-bold">Box Office News!</h1>
        <div class="flex text-center">
            <h3 class="p-4">${data.pricing[0].price}</h3>
            <h3 class="p-4">${data.pricing[1].price}</h3>
            <h3 class="p-4">${data.pricing[2].price}</h3>
        </div>

        <div class="flex gap-6 justify-between">
            <div>
            <h3>Features</h3>
                <ol>
                    <li>${data.features.feature_name}</li>
                    <li></li>
                    <li></li>
                </ol >
            </div >
    <div>
        <h3>Integrations</h3>
        <ol>
            <li>${data?.integrations[0] || "no data found"}</li>
            <li>${data.integrations[1] || "no data found"}</li>
            <li>${data.integrations[2] || "no data found"}</li>
        </ol>
    </div>
        </div >

    </div >


    <div class="w-1/2">
        <img src="${data.image_link[0]}"
            class="w-full rounded-lg shadow-2xl" />
        <div class="text-center py-6">
            <h3 class="my-4 text-xl">hi how are you doing</h3>
            <p>I'm doing well, thank you for asking. How can I assist you today?</p>

        </div>
    </div>
</div >


    `

    my_modal.showModal()
}


const handleSearchField = () => {

}

loadData()
