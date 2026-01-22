import React from 'react'
import type { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import { FormLabel } from "../../ui/form";
import FormContainer from "./FormContainer";
import { Input, type InputType } from '../../ui/input';
import { Textarea, type TextareaType } from '../../ui/textarea';
import type { SelectType } from '../SelectComponent';
import SelectComponent from '../SelectComponent';
import type { UploadType } from '../Upload';
import Upload from '../Upload';

type BaseField<T extends FieldValues> = {
  label?: string | React.ReactNode;
  name: FieldPath<T>;
  labelClass?: string;
  className?: string;
};


export type FieldItems<T extends FieldValues> =
  | (BaseField<T> & { fieldType: "input"; props?: InputType })
  | (BaseField<T> & { fieldType: "textarea"; props?: TextareaType })
  | (BaseField<T> & { fieldType: "select"; props: SelectType })
  | (BaseField<T> & { fieldType: "upload"; props: UploadType })


interface Props<T extends FieldValues> {
  form: UseFormReturn<T>;
  loading?: boolean;
  fields: FieldItems<T>[];
}


export default function FieldInput<T extends FieldValues>({
  form,
  loading,
  fields,
}: Props<T>) {
  if (!form) {
    console.error("No form provided");
    return null;
  }

  const { control } = form;
  return (
    <>
      {fields?.map((f) => (
        <FormContainer
          key={String(f.name)}
          control={control}
          name={f.name} // f.name is now of type FieldPath<T>
          className={f?.className}
          render={(field, error) => (
            <div>
              {f.label && (
                <FormLabel className={f.labelClass}>{f.label}</FormLabel>
              )}

              {f.fieldType === "input" && (
                <Input
                  {...field}
                  error={error?.message}
                  disabled={loading || f?.props?.disabled}
                  {...f?.props}
                />
              )}

              {f.fieldType === "textarea" && (
                <Textarea
                  {...field}
                  error={error?.message}
                  disabled={loading || f?.props?.disabled}
                  {...f?.props}
                />
              )}

              {f.fieldType === "select" && (
                <SelectComponent
                  {...field}
                  error={error?.message}
                  disabled={loading || f?.props?.disabled}
                  {...f?.props}
                />
              )}

              {f.fieldType === "upload" && (
                <Upload
                  {...field}
                  error={error?.message}
                  disabled={loading || f?.props?.disabled}
                  {...f?.props}
                />
              )}
            </div>
          )}
        />
      ))}
    </>
  );
}