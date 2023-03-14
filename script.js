const heroData = document.getElementById('hero-data');
const heroList = document.getElementById('hero-list');

fetch(`https://raw.githubusercontent.com/kronusme/dota2-api/master/data/heroes.json`)
  .then(result => result.json())
  .then((data) => {
    console.log(data);

    // Generate hero data string
    let heroDataHtml = '';
    for (let i = 0; i < data.heroes.length; i++) {
      const hero = data.heroes[i];
      heroDataHtml += `<div>Name: ${hero.name}, ID: ${hero.id}, Localized Name: ${hero.localized_name}</div>`;
    }

    // Set heroData div HTML
    heroData.innerHTML = heroDataHtml;

    // Populate heroList table with data from API
    for (let i = 0; i < data.heroes.length; i++) {
      const hero = data.heroes[i];

      const row = heroList.insertRow();

      const localizedNameCell = row.insertCell();
      localizedNameCell.textContent = hero.name;

      const idCell = row.insertCell();
      idCell.textContent = hero.id;

      const nameCell = row.insertCell();
      nameCell.textContent = hero.localized_name;

    }
  });
