// all-surveys.component.ts
import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { AllSurveysService } from './all-surveys.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'; // Import Router


@Component({
  selector: 'app-all-surveys',
  templateUrl: './all-surveys.component.html',
  styleUrls: ['./all-surveys.component.css'],
})


export class AllSurveysComponent implements OnInit, OnDestroy {
  surveys: any[] = [];
  private subscription: Subscription = new Subscription();

  // New property to store the selected survey for update
  selectedSurvey: any = null;

  // New property to track whether the update form is displayed
  isUpdateFormVisible: boolean = false;

  constructor(
    private allSurveysService: AllSurveysService, 
    private cdr: ChangeDetectorRef, 
    private router: Router, 
    private route: ActivatedRoute,
    private renderer: Renderer2  // Add Renderer2

  ) { }

  ngOnInit(): void {
    this.loadSurveys();
  }


  private loadSurveys() {
    this.subscription.add(
      this.allSurveysService.getAllSurveys().subscribe({
        next: (surveys) => {
          this.surveys = surveys;
          this.cdr.detectChanges();
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error('Error fetching surveys:', error);
        }
      })
    );
  }
  @ViewChild('updateFormRef') updateFormRef: ElementRef;

  updateSurvey(survey: any) {
    this.selectedSurvey = { ...survey };
    console.log('Update survey:', this.selectedSurvey);
    this.isUpdateFormVisible = true;

      // Scroll to the form
  setTimeout(() => {
    if (this.updateFormRef && this.updateFormRef.nativeElement) {
      this.updateFormRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, 0);

  }

  saveUpdatedSurvey() {
    if (!this.selectedSurvey) {
      console.error('No survey selected for update');
      return;
    }
  
    this.subscription.add(
      this.allSurveysService.updateSurvey(this.selectedSurvey.id, this.selectedSurvey).subscribe(
        (response: any) => {  // Change the type to any
          const jsonResponse = response as { message: string }; // Cast the response to the expected type
          console.log('Response:', jsonResponse);
  
          // Check if the response has a 'message' property
          if (jsonResponse && jsonResponse.message === 'Survey updated successfully') {
            // Handle success
            console.log('Survey updated successfully');
  
            // Reset selectedSurvey and hide the update form after update
            this.selectedSurvey = null;
            this.isUpdateFormVisible = false;
  
            // Reload the component by navigating to the current route
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['.'], { relativeTo: this.route });
          } else {
            // Handle unexpected response or error
            console.error('Unexpected response:', jsonResponse);
          }
        },
        (error) => {
          console.error('Error updating survey:', error);
        }
      )
    );
  }
  

  cancelUpdate() {
    // Reset selectedSurvey and hide the update form
    this.selectedSurvey = null;
    this.isUpdateFormVisible = false;
  }

  deleteSurvey(id: number) {
    // Confirm deletion
    const confirmDelete = window.confirm('Are you sure you want to delete this survey?');

    if (confirmDelete) {
      // Implement delete logic here
      console.log('Delete survey with ID:', id);

      // Call the service method to delete the survey by ID
      this.subscription.add(
        this.allSurveysService.deleteSurvey(id).subscribe({
          next: () => {
            // Reload surveys after deletion
            this.loadSurveys();
          },
          error: (error) => {
            console.error('Error deleting survey:', error);
          }
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
