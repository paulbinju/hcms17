import {Component, Inject} from '@angular/core';
import { UntypedFormBuilder,UntypedFormGroup, Validators  } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
  selector: 'app-lookupadd',
  templateUrl: './lookupadd.component.html',
  styleUrls: ['./lookupadd.component.css']
})
export class LookupaddComponent   {
  myForm: UntypedFormGroup;
  groupName : string;
  constructor(private fb: UntypedFormBuilder, private lookupservice : LookupService, private router : Router,
    private matdialogRef: MatDialogRef<LookupaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {groupName: string}

  ) { 
this.groupName = data.groupName;

  }

  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      orderno: ['', [Validators.required]],
      groupName:[this.groupName]
    });
  }

  onSubmit(form: UntypedFormGroup) {
    this.lookupservice.postLookup(form.value).subscribe();
this.matdialogRef.close();
  }

}
