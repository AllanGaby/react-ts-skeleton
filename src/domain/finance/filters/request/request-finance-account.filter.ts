export enum RequestFinanceAccountFilter {
  Id = 'finance_account.id',
  Name = 'finance_account.name',
  Type = 'finance_account.type::text',
  ClosingDate = 'finance_account.closing_date',
  DueDate = 'finance_account.due_date',
  CreditDate = 'finance_account.credit_date',
  DefaultCreditValue = 'finance_account.default_credit_value',
  DefaultCreditReleased = 'finance_account.default_credit_released',
  CreatedAt = 'finance_account.created_at',
  UpdatedAt = 'finance_account.updated_at',
  AccountId = 'account.id',
  AccountName = 'account.name',
  AccountEmail = 'account.email',
  AccountIdentification = 'account.identification',
  AccountCreatedAt = 'account.created_at',
  AccountUpdatedAt = 'account.updated_at',
  CompanyId = 'company.id',
  CompanyName = 'company.name',
  CompanyCreatedAt = 'company.created_at',
  CompanyUpdatedAt = 'company.updated_at'
}