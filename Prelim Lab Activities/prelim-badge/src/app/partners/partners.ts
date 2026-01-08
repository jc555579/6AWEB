import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.html'
})
export class PartnersComponent {
  partners = [
    {
      company: 'Google',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFyaI9w9997FK1kQN0p-FYULMrQutCSxCyA&s',
      sponsorship: 'Platinum',
      year: 1998
    },
    {
      company: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
      sponsorship: 'Gold',
      year: 1975
    },
    {
      company: 'IBM',
      logo: 'https://download.logo.wine/logo/IBM/IBM-Logo.wine.png',
      sponsorship: 'Silver',
      year: 1911
    },
    {
      company: 'Intel',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg',
      sponsorship: 'Silver',
      year: 1968
    }
  ];
}
