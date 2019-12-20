export interface IIdValue {
  Id: any;
  Value: string;
}

export interface IDocument  {

  /**
   * Document identifier
   */
  Id: string;

  /**
   * Public identifier of the document and version
   */
  Uuid: string;

  /**
   * Document name
   */
  Name: string;

  /**
   * Document type
   */
  Type: string;

  /**
   * Document title
   */
  Title?: string;

  /**
   * Document subject
   */
  Subject?: string;

  /**
   * Author of the document
   */
  Author?: string;

  /**
   * Document tags/keywords (i.e: company1, draft, etc.).
   * Do not use duplicates with type or other fields already used
   */
  Tags?: string[];

  /**
   * Creation date and time
   */
  CreationTimestamp?: Date;

  /**
   * Last modification date and time
   */
  LastModificationTimestamp?: Date;

  /**
   * Expire date and time
   */
  ExpirationTimestamp?: string;

  /**
   * The version number
   */
  Version?: number;

  /**
   * Content size in bytes
   */
  Size?: number;

  /**
   * Content format
   */
  Format?: string;

  /**
   * Document extended properties formed as name=value (i.e: bdrId=435, status=SIGNED, etc.)
   */
  ExtendedProperties?: any
}