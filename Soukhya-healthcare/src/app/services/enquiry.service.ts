import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EnquiryService {
  constructor(private http: HttpClient) {}

  submit(payload: EnquiryPayload): Observable<{ status: 'ok' }> {
    return this.http.post<{ status: 'ok' }>(`/api/enquiries`, payload);
  }
}
