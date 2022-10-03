var input = prompt("Enter IP-address:");
var ripe = "https://apps.db.ripe.net/db-web-ui/query?searchtext=" + input;

function RiPe() {window.open(ripe); }

RiPe();
