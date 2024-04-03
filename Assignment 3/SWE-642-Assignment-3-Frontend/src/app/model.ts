/*
 * model.ts
 * Description: Model class representing survey data structure.
 * Teammates: Mary Ashwitha Gopu - G01408743, Venkata Sree Divya Kasturi - G01411963
 */

export class Model {
  // id?: number | null;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  telephoneNumber: string;
  email: string;
  dateOfSurvey: string;
  likedMost: string;
  interestSource: string;
  likelihoodRecommendation: string;
  additionalComments: string;

  constructor() {
    // this.id = null;
    this.firstName = '';
    this.lastName = '';
    this.streetAddress = '';
    this.city = '';
    this.state = '';
    this.zip = '';
    this.telephoneNumber = '';
    this.email = '';
    this.dateOfSurvey = '';
    this.likedMost = '';
    this.interestSource = '';
    this.likelihoodRecommendation = '';
    this.additionalComments = '';
  }
}
