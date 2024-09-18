import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiServiceFactory } from "src/common/factories/api.factory";
import { PostInterface } from "src/common/shared/@types/post";


@Injectable({
  providedIn: 'root'
})
export class PostDetailsService extends ApiServiceFactory<PostInterface>{
  constructor(http: HttpClient) {
    super(http)
  }
}