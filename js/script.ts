//import jQuery from "jquery";
//window.$ = window.jQuery = jQuery;

//base for all Events

class EventLocation {
    public name:string;
    public address:string;
    public zip:number;
    public img:string;

    constructor(name: string, address: string, zip: number, img: string){
        this.name = name;
        this.address = address;
        this.zip = zip;
        this.img = img;
    }
    displayEvent(){
        document.querySelector(".forevent").innerHTML += `
		<div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card">
                <div class="card-header text-center">
                    <h4>Places: <br>${this.name}</h4>
                </div>
                <img class="card-img-top img-responsive" src="img/${this.img}" alt="${this.name}">
                <div class="card-body">
                    <p>${this.address}, ${this.zip} Wien</p>
                </div>
                <button type="button" class="btn btn-dark">More information & directions</button>
            </div>
        </div>`
    }

}

//extending EventLocation for Restaurants

class Restaurant extends EventLocation {
    public cuisine:string;
    public phone:string;
    public website:string;

    constructor(name: string, address: string, zip: number, img: string, cuisine:string, phone:string, website:string){
        super(name,address,zip,img);
        this.cuisine = cuisine;
        this.phone = phone;
        this.website = website;
    }
    displayEvent(){
        document.querySelector(".forevent").innerHTML += `
				<div class="col-lg-4 col-md-6 col-sm-12">
		            <div class="card">
		                <div class="card-header text-center">
		                    <h4>Restaurants:<br> ${this.name}</h4>
		                </div>
		                <img class="card-img-top img-responsive" src="img/${this.img}" alt="${this.name}">
		                <div class="card-body">
		                    <p>${this.address}, ${this.zip} Wien</p>
		                    <p>${this.phone}</p>
		                    <p>${this.website}</p>
		                    <p>Speciality / Cuisine: ${this.cuisine}</p>
                        </div>
                        <button type="button" class="btn btn-dark">Reserve a table & get directions</button>
		            </div>
		        </div>`
    }
}

//extending EventLocation for Events

class Events extends EventLocation {
    public price:string;
    public eventDate:string;
    public eventTime:string;

    constructor(name: string, address: string, zip: number, img: string, price: string, eventDate: string, eventTime: string){
        super(name, address, zip, img);
        this.price = price;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
    }
    displayEvent(){
        document.querySelector(".forevent").innerHTML += `
					<div class="col-lg-4 col-md-6 col-sm-12">
			            <div class="card">
			                <div class="card-header text-center">
			                   <h4>Events: <br>${this.name}</h4>
			                </div>
			                <img class="card-img-top img-responsive" src="img/${this.img}" alt="${this.name}">
			                <div class="card-body">
			                    <p>${this.address}, ${this.zip} Wien</p>
			                    <p>${this.eventDate} ${this.eventTime}</p>
			                    <p>${this.price}</p>
                            </div>
                            <button type="button" class="btn btn-dark">Check the location & buy tickets</button>
			            </div>
			        </div>`
    }
}

// using constructors
let charlesChurch = new EventLocation("St. Charles Church - Karlskirche","Karlsplatz 1",1010,"karlskirche.jpg");
let schoenbrunn = new EventLocation("Zoo Vienna - Schönbrunn","Maxingstraße 13b",1130,"schönbrunn.jpg");
let lemonLeaf = new Restaurant("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", 1050, "lemonleaf.png", "Thai", "+43 1 58 123 08","http://www.lemonleaf.at");
let sixta = new Restaurant("SIXTA <br> Bar, Cafe & Restaurant", "Schönbrunner Straße 21", 1050, "sixta.png", "'Wienerisch'", "+43 1 58 528 56", "http://www.sixta-restaurant.at/");
let kristofferson = new Events("Kris Kristofferson", "Halle F, Roland Rainer Platz 1", 1150, "kristofferson.jpg", "58.50", "Fr., 15.11.2019","20:00");
let kravitz = new Events("Lenny Kravitz", "Halle D, Roland Rainer Platz 1", 1150, "lenny.jpg", "47.80", "Sat., 09.12.2019", "19:30");

//event array

let eventArray: any[] = [charlesChurch,schoenbrunn,lemonLeaf, sixta, kristofferson,kravitz];

//printing in DOM

function printOnSite(array: any[]) {
    array.forEach((event: any) => {
        event.displayEvent();
})};

printOnSite(eventArray);

//tah-dah!