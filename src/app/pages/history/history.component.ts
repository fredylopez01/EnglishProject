import { Component } from '@angular/core';
import { eventLine } from 'src/app/interfaces/EventLine';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  events: eventLine[] = [
    {year: 1760, 
     title: "Industrial Revolution", 
     description: "The Industrial Revolution marked the beginning of the use of machines in large-scale production. This process began in England and transformed manufacturing, replacing manual labor with machines powered by water, steam, and later, electricity. It was a crucial change for the economy and society, and laid the foundation for future technological advances.",
     urlImage: "./../../../assets/img/industrial.jpg"},
    {year: 1876, 
     title: "Invention of the Telephone", 
     description: "Alexander Graham Bell patented the first telephone, revolutionizing communications. This invention allowed for the first time the transmission of human voice over long distances, transforming the way people interacted, making instant communication possible in different parts of the world.",
     urlImage: "./../../../assets/img/phone.jpg"},
    {year: 1940, 
     title: "First Electronic Computer (ENIAC)", 
     description: "The ENIAC, created during World War II, was the first general-purpose electronic computer. This gigantic device, which occupied an entire room, performed calculations for military and scientific applications much faster than any other method at the time. It marked the beginning of the computer age.",
     urlImage: "./../../../assets/img/computer.jpg"},
    {year: 1969, 
     title: "Creation of the Internet (ARPANET)", 
     description: "ARPANET was the precursor to the Internet, developed by the United States Department of Defense. This system interconnected computers to share information between different universities and research centers. In a few years, this concept evolved into what we know today as the Internet, a global network that has changed communication, commerce, and culture.",
     urlImage: "./../../../assets/img/internet.jpg"},
    {year: 2007,
     title: "First iPhone", 
     description: "Apple launched the iPhone, which revolutionized the concept of mobile phones by integrating them with a touchscreen, web browsing, and a wide range of applications. This event transformed not only the technology industry, but also the way we live and work, consolidating smartphones as essential tools.",
     urlImage: "./../../../assets/img/iphone.jpg"},
    {year: 2024, 
     title: "AI and Blockchain", 
     description: "Artificial Intelligence (AI) and Blockchain are two of the most promising technologies today. AI is transforming sectors such as medicine, automotive, and commerce, while Blockchain, a technology that underpins cryptocurrencies, has the potential to change how we manage data and transactions in a secure and decentralized manner.", 
     urlImage: "./../../../assets/img/ia.jpg"}
];
}
