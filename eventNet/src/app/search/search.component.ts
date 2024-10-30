import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ResearchHistoryService } from '@core/common/utils/research-history/research-history.service';
import { PostInterface } from '@core/shared/@types/post';
import { UserInterface } from '@core/shared/@types/user';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonSearchbar,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chatbubbleOutline,
  closeCircleOutline,
  heartOutline,
  mailOutline,
  repeatSharp,
  returnDownForward,
} from 'ionicons/icons';
import { SearchService } from './search.service';

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  imports: [
    IonCard,
    IonLabel,
    IonSearchbar,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonText,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonToolbar,
    RouterLink,
    FormsModule,
    NgIf,
    NgFor,
  ],
})
export class SearchComponent implements OnInit {
  data!: { posts: PostInterface[]; users: UserInterface[] };
  filteredData!: { posts: PostInterface[]; users: UserInterface[] };
  researchHistory: string[] | null;
  search: string = '';
  isExploreSearch = false;

  constructor(
    private readonly searchService: SearchService,
    private readonly researchHistoryService: ResearchHistoryService
  ) {
    this.data = { posts: [], users: [] };
    this.filteredData = { posts: [], users: [] };
    this.researchHistory = this.researchHistoryService.getResearchHistory();
    addIcons({
      chatbubbleOutline,
      repeatSharp,
      mailOutline,
      heartOutline,
      closeCircleOutline,
      returnDownForward,
    });
  }

  ngOnInit(): void {
    this.searchService.findAllPosts().subscribe((posts) => {
      this.data.posts = posts;
    });

    this.searchService.findAllUsers().subscribe((users) => {
      this.data.users = users;
    });
  }
  onSearchChange() {
    this.isExploreSearch = false;
    this.filteredData.posts = this.data.posts.filter((post: PostInterface) =>
      post.text.toLowerCase().includes(this.search.toLowerCase())
    );
    this.filteredData.users = this.data.users.filter((user: UserInterface) =>
      user.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  isSearch() {
    this.isExploreSearch = false;
    console.log('O usuario está pesquisando');
    this.researchHistory = this.researchHistoryService.getResearchHistory();
  }
  isExplore() {
    this.researchHistoryService.addSearchInHistory(this.search);
    this.isExploreSearch = true;
    console.log('O usuario está explorando');
  }

  deleteRecents() {
    this.researchHistoryService.deleteResearchHistory();
    this.researchHistory = this.researchHistoryService.getResearchHistory();
  }
}
