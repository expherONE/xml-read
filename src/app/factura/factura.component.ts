import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {


  ngOnInit() {
  }
  
}

fetch('assets/example.xml')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
      let parser = new DOMParser(),
      xmldoc = parser.parseFromString(data,'text/xml' )
        console.log('data = ', xmldoc.getElementsByTagName('tfd:TimbreFiscalDigital')[0].getAttribute('UUID'));
        console.log('data = ', xmldoc.getElementsByTagName('bovadd:BOVEDAFISCAL')[0].childNodes[3]);
        console.log('data = ', xmldoc.getElementsByTagName('bovadd:BOVEDAFISCAL')[0].getElementsByTagName('bovadd:BovedaFiscal')[0]);
        console.log('data = ', xmldoc.getElementsByTagName('bovadd:BOVEDAFISCAL')[0].getElementsByTagName('bovadd:BovedaFiscal')[0].getAttribute('razonSocialCliente'));

    })
    .catch(function(err) {
        console.error(err);
    });

 