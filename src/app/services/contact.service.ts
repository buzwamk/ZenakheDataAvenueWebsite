import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: number;
  errors?: { field: string; message: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  submit(payload: ContactPayload): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.apiUrl, payload).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let message = 'Something went wrong. Please try again.';
    if (error.error?.message) {
      message = error.error.message;
    } else if (error.status === 0) {
      message = 'Cannot reach the server. Please check your connection.';
    } else if (error.status === 429) {
      message = 'Too many submissions. Please wait 15 minutes and try again.';
    } else if (error.status === 422) {
      return throwError(() => error.error);
    }
    return throwError(() => ({ success: false, message }));
  }
}
