class ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show edit update destroy ]

  # GET /articles
  def index
    @articles = Article.all

    render inertia: "articles/index", props: { articles: serialize(@articles) }
  end

  # GET /articles/1
  def show
    render inertia: "articles/show", props: { article: serialize(@article) }
  end

  # GET /articles/new
  def new
    render inertia: "articles/new"
  end

  # GET /articles/1/edit
  def edit
    render inertia: "articles/edit", props: { article: serialize(@article) }
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article, notice: "Article was successfully created."
    else
      redirect_to new_article_path(@article), inertia: { errors: serialize_errors(@article) }
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      redirect_to @article, notice: "Article was successfully updated."
    else
      redirect_to edit_article_path(@article), inertia: { errors: serialize_errors(@article) }
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
    redirect_to articles_url, notice: "Article was successfully destroyed."
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :content)
  end
end
