class ArticleSerializer < ApplicationSerializer
  attributes :id, :title, :content, :created_at

  def created_at
    object.created_at.to_date.to_formatted_s(:long)
  end
end
