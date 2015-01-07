class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references  :sender
      t.references  :receiver
      t.text        :content

      t.timestamps
    end
  end
end
